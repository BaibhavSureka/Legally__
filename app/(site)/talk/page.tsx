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

        setButtonText("You will get a call from your AI expert lawyer in a Minute");
        setButtonColor("gray");
        setButtonDisabled(true);
    };

    return (
        <div className='mt-50 m-40 p-50'>
            <Card className="mx-auto mt-10">
                <CardContent>
                    <Input
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleSubmit} color={buttonColor} disabled={buttonDisabled}>
                        {buttonText}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardWithInput;
