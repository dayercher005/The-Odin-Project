import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const API = "https://blog-api-backend-h85d.onrender.com/user/log-in"

  const navigate = useNavigate();

  const submitLoginForm = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      if (result){
        localStorage.setItem("token", result.token);
        navigate("/dashboard");
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        
        <form onSubmit={submitLoginForm} action="https://blog-api-backend-h85d.onrender.com/user/log-in" method="POST">
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-xl font-bold">Welcome to PatchNote</h1>
              <FieldDescription>
                Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
              </FieldDescription>
            </div>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
              />
            </Field>
            <Field>
              <Button type="submit">Login</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
  )
}

