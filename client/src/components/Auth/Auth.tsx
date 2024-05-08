import Signup from './signup/Signup'
import SignIn from './SignIn/SignIn';
import { Switch } from "@/components/ui/switch"
import { useState } from 'react';


const Auth = () => {
    const [switchValue, setSwitchValue] = useState<boolean>(false);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

                <div className="relative bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto rounded-lg px-10 sm:w-full sm:max-w-lg lg:w-500"> {/* Add lg:w-500 for fixed width on large devices */}

                    <div className="flex justify-end mb-10"> {/* Flex container for right alignment */}
                        <div className="flex items-center space-x-2"> {/* Flex items container */}
                            <span>Sign Up</span>
                            <Switch checked={switchValue} onCheckedChange={() => setSwitchValue(!switchValue)} />
                            <span>Login</span>
                        </div>
                    </div>


                    {
                        switchValue ? <SignIn /> : <Signup />
                    }


                </div>
            </div>
        </>
    )
}

export default Auth