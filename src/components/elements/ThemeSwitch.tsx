'use client'
import { useEffect, useState } from "react"
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Menu } from 'lucide-react';

export default function ThemeSwitch() {
	const { theme, toggleTheme, mounted } = useTheme();

	return (
		<>
			<div
				className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80"
				onClick={toggleTheme}
				style={{ cursor: "pointer" }}
                suppressHydrationWarning
			>
				{mounted && theme === 'dark' ? <Sun size={20} color="#ECBA23" /> : <Moon size={20} color="#B8AEA3" />}
			</div>
		</>
	)
}
