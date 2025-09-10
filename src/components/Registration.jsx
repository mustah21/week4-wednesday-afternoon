import React from 'react'

const Registration = () => {
    return (
        <div>
            <h2>Registration page</h2>
            <form>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input id='name' type='text'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input id='name' type='text'></input>
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input id='password' type='password'></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Registration