
import { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from '@/app/store';
import { Login, signIn } from '@/app/features/Auth/authSlice';

const SignIn = () => {
    const [formData, setFormData] = useState<Login>({
        email_id: '',
        password: '',
    })
    const dispatch = useAppDispatch()

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const onClickHandler = () => {
        dispatch(signIn(formData))
    }


    return (
        <>

            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your account
            </h2>


            <div className="space-y-6 mt-10 ">
                <div>
                    <label htmlFor="email_id" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <Input
                            id="email_id"
                            name="email_id"
                            type="email"
                            value={formData.email_id}
                            autoComplete="email_id"
                            required
                            onChange={(e) => changeHandler(e)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={formData.password}
                            autoComplete="current-password"
                            required
                            onChange={(e) => changeHandler(e)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <Button
                    onClick={onClickHandler}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login
                </Button>
            </div>
        </>
    )
}

export default SignIn