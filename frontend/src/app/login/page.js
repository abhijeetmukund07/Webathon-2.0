"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, rgba(16,185,129,0.15), transparent 80%)`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // navaneeth will handle this
    setTimeout(() => setIsLoading(false), 2000);
  };

  const calculatePasswordStrength = (value) => {
    setPasswordStrength(Math.min(value.length / 2, 4));
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    animate(radius, 200, { duration: 0.5 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0a1f1a] to-slate-900 flex items-center justify-center p-4 overflow-hidden">
      <motion.div
        onMouseMove={handleMouseMove}
        style={{ background }}
        className="relative bg-slate-800/50 backdrop-blur-2xl rounded-[2.5rem] p-8 w-full max-w-md border border-emerald-400/20 shadow-2xl shadow-emerald-900/10 hover:shadow-emerald-900/20 transition-all duration-500 group/form"
      >
        {isClient && (
          <div className="absolute inset-0 rounded-[2.5rem] -z-10 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 bg-emerald-400/20 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                animate={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 space-y-4 relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6 animate-float inline-block"
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-400/10 hover:border-emerald-400/20 transition-colors duration-300">
              <svg className="w-10 h-10 text-emerald-400" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 014 4a4 4 0 01-4 4a4 4 0 01-4-4a4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
                />
              </svg>
            </div>
          </motion.div>
          <motion.h1
            initial={{ letterSpacing: "-0.02em" }}
            animate={{ letterSpacing: "-0.01em" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            className="text-5xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent"
          >
            Welcome Back
          </motion.h1>
          <p className="text-slate-400/90 font-light mt-2">
            Enter your credentials to continue
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div className="group relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-700/30 border border-slate-600/30 rounded-xl focus:border-emerald-400/50 outline-none transition-all duration-300 text-slate-200 placeholder-transparent peer"
              placeholder=" "
              required
            />
            <motion.label
              htmlFor="email"
              className="absolute left-4 top-3.5 text-slate-400/90 pointer-events-none transition-all duration-300 
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-emerald-300
                         -top-3 text-sm bg-slate-800/30 backdrop-blur-sm px-2 z-[1]"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              Email Address
            </motion.label>
            {email.includes("@") && (
              <motion.div
                className="absolute right-4 top-4 text-emerald-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                ✓
              </motion.div>
            )}
          </motion.div>

          <motion.div className="group relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                calculatePasswordStrength(e.target.value);
              }}
              className="w-full px-4 py-3.5 bg-slate-700/30 border border-slate-600/30 rounded-xl focus:border-emerald-400/50 outline-none transition-all duration-300 text-slate-200 placeholder-transparent peer"
              placeholder=" "
              required
            />
            <motion.label
              htmlFor="password"
              className="absolute left-4 top-3.5 text-slate-400/90 pointer-events-none transition-all duration-300 
                         peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                         peer-focus:-top-3 peer-focus:text-sm peer-focus:text-emerald-300
                         -top-3 text-sm bg-slate-800/30 backdrop-blur-sm px-2 z-[1]"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              Password
            </motion.label>
            <div className="absolute bottom-1 right-4 flex gap-1 z-10">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i < passwordStrength ? "bg-emerald-400" : "bg-slate-600/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-xl font-semibold text-slate-900 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="relative z-10"
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoading ? 0 : 1 }}
            >
              Sign In
            </motion.span>
            {isLoading && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              </motion.div>
            )}
          </motion.button>

          <motion.div
            className="flex justify-between px-1 text-sm"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
          >
            <a
              href="#"
              className="text-slate-400/90 hover:text-emerald-300 transition-colors"
            >
              Forgot password?
            </a>
            <a
              href="#"
              className="text-slate-400/90 hover:text-emerald-300 transition-colors"
            >
              Create account
            </a>
          </motion.div>
        </motion.form>

        <motion.div
          className="mt-6 text-center text-sm text-emerald-400/80"
          initial={false}
        >
          {isClient && (
            <>
              <span className="animate-pulse">🔒 Secure connection</span>
              <span className="mx-2">•</span>
              <span>{new Date().toLocaleTimeString()}</span>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
