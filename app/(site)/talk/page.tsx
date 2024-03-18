"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CardWithInput = () => {
    const [phone, setPhone] = useState("");
    const [buttonText, setButtonText] = useState("Talk to Lawyer"); 
    const [buttonColor, setButtonColor] = useState("primary"); 
    const [buttonDisabled, setButtonDisabled] = useState(false); 

    const handleSubmit = () => {
        const payload = {
            phone: phone
        };
        fetch("http://localhost:8000/talk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        setButtonText("You will get a call from your AI expert lawyer in a minute");
        setButtonColor("gray");
        setButtonDisabled(true);
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className="w-full max-w-md">
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Contact an Expert Lawyer</h2>
                    <Input
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="p-6 flex justify-end">
                    <Button onClick={handleSubmit} color={buttonColor} disabled={buttonDisabled}>
                        {buttonText}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardWithInput;
