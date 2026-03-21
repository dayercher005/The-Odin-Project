import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const API = 'https://blog-api-backend-h85d.onrender.com/author/sign-up'

  const submitSignupForm = async (event: React.SubmitEvent<HTMLFormElement>): Promise<void> => {

    event.preventDefault();

    try{
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password, confirmPassword: confirmPassword})
      });

      if (!response.ok){
        throw new Error("Error")
      }

      const result = await response.json();

      if (result){
        navigate("/log-in");
      }

    } catch(error){
      console.log(error)
    }
  }

  return (
    <form onSubmit={submitSignupForm} action="https://blog-api-backend-h85d.onrender.com/author/sign-up" method="POST" className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your PatchNote Publisher account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account now!
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input 
          id="username" 
          type="text" 
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          required />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input 
          id="password" 
          type="password" 
          onChange={(event) => {setPassword(event.target.value)}}
          value={password}
          required />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input 
          id="confirm-password" 
          type="password"
          onChange={(event) => {setConfirmPassword(event.target.value)}}
          value={confirmPassword}
          required />
          <FieldDescription>Please confirm your password.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Create Account</Button>
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link to="/log-in">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}