"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'

const ChatUI = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string; }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }])
      setIsLoading(true)

      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        })

        const data = await response.json()
        console.log(data)
        if (response.ok) {
          setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: data.response }])
        } else {
          console.error('Error:', data.error)
        }
      } catch (error) {
        console.error('Error:', error)
      }

      setInput('')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="flex flex-col bg-gray-900 text-white h-screen">
      <div className="flex-1 mr-10 ml-10 mt-20 overflow-y-auto" ref={chatContainerRef}>
        <ScrollArea className="h-full">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <Avatar
                  className={`${message.sender === 'user' ? 'order-2 ml-2' : 'order-1 mr-2'}`}
                />
                <div
                  className={`px-4 py-2 rounded-lg ${
                    message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <Avatar className="order-1 mr-2" />
                <div className="px-4 py-2 rounded-lg bg-gray-700">Loading...</div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex items-center">
        <Textarea
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 mr-2 bg-gray-700 text-white placeholder-gray-400"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  )
}

export default ChatUI