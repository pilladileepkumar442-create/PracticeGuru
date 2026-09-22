
        tailwind.config = {
            theme: {
                extend: {
                    keyframes: {
                        shake: { '0%, 100%': { transform: 'translateX(0)' }, '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-8px)' }, '20%, 40%, 60%, 80%': { transform: 'translateX(8px)' } },
                        pop: { '0%': { transform: 'scale(0.95)' }, '50%': { transform: 'scale(1.05)' }, '100%': { transform: 'scale(1)' } },
                        spinSlow: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
                        spinSlowReverse: { '0%': { transform: 'rotate(360deg)' }, '100%': { transform: 'rotate(0deg)' } },
                        bob: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
                        robotHappy: { '0%, 100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-40px) scale(1.2)' } },
                        robotFall: { '0%': { transform: 'translateY(0) rotate(0deg)', opacity: 1 }, '100%': { transform: 'translateY(150vh) rotate(180deg)', opacity: 0 } },
                        thunder: { '0%, 100%': { opacity: 0 }, '10%, 30%': { opacity: 0.8 }, '20%, 40%': { opacity: 0.2 } },
                        scanLine: { '0%': { top: '-10%' }, '100%': { top: '110%' } }
                    },
                    animation: {
                        shake: 'shake 0.5s ease-in-out', pop: 'pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        spinSlow: 'spinSlow 40s linear infinite', spinSlowReverse: 'spinSlowReverse 50s linear infinite',
                        bob: 'bob 3s ease-in-out infinite', robotHappy: 'robotHappy 0.4s ease-in-out infinite',
                        robotFall: 'robotFall 1s ease-in forwards', thunder: 'thunder 0.6s ease-out',
                        scanLine: 'scanLine 6s linear infinite'
                    }
                }
            }
        }
    