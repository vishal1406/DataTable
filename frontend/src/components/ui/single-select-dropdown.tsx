"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./dropdown-menu"
import { Button } from "@/components/ui/button"

type Option = {
  label: string
  value: string
  disabled?: boolean
}

interface SingleSelectDropdownProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  required?: boolean
  placeholder?: string
  className?: string;
}

export function SingleSelectDropdown({
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  placeholder = "Select an option",
  className
}: SingleSelectDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          aria-required={required}
          disabled={disabled}
          className={className}
        >
          {options.find((opt) => opt.value === value)?.label || placeholder}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
