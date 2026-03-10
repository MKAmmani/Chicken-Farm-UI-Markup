import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export default function Login() {
  const [email, setEmail] = useState('hellomasqT@gmail.com')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: real auth logic (API call, Firebase, etc.)
    console.log('Login attempt:', { email, password, rememberMe })
  }

  return (
    <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-10">
      {/* Cow background decor */}
      <div className="absolute -top-28 -right-20 w-72 opacity-20 transform rotate-6 pointer-events-none md:w-80 md:-top-32 md:-right-24">
        <img
          src="https://images.unsplash.com/photo-1546445317-29a8b68c0c2d?auto=format&fit=crop&w=800&q=80"
          alt="Farm Cow"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Logo */}
      <div className="relative text-center mb-8">
        <div className="text-4xl font-bold text-farmGreen flex items-center justify-center gap-3">
          <span className="text-5xl">🐔</span>
          <div>
            <span className="text-farmGreenDark">CHICKEN</span>FARM
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
        Welcome back
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Please enter your details to login
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-farmGreen focus:border-farmGreen transition"
            placeholder="hellomasqT@gmail.com"
            required
          />
        </div>

        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-farmGreen focus:border-farmGreen pr-12 transition"
              placeholder="••••••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-farmGreen"
            >
              {showPassword ? <AiFillEyeInvisible size={22} /> : <AiFillEye size={22} />}
            </button>
          </div>
          <a href="#" className="text-sm text-farmGreen hover:underline absolute right-0 top-2">
            Forgot password?
          </a>
        </div>

        <div className="flex items-center mb-8">
          <label className="flex items-center text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-5 h-5 accent-farmGreen mr-2"
            />
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-farmGreen text-white font-semibold rounded-xl hover:bg-farmGreenDark transition transform hover:-translate-y-1 shadow-lg"
        >
          Login
        </button>
      </form>

      <div className="my-6 text-center text-gray-500 text-sm">OR</div>

      <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
        Continue with Google
      </button>

      <p className="text-center mt-8 text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-farmGreen font-semibold hover:underline">
          Register
        </a>
      </p>

      {/* Plants decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-8xl opacity-10 pointer-events-none select-none">
        farm
      </div>
    </div>
  )
}
