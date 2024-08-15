import React from 'react'

const Error = () => {
    return (
        <section className="bg-white bg-opacity-5">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-blue-600 lg:text-9xl">500</h1>
                    <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl ">Internal Server Error.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 ">Sorry something went wrong.</p>
                </div>
            </div>
        </section>
    )
}

export default Error;
