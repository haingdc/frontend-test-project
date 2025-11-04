import React, { createContext, useContext, useRef, useEffect } from 'react'
import './simple-drawer.scss'
import { Button } from '../button/button'
import { X } from '../icon'
import IMAGES_CONSTANTS from '../../../constants/images'
import clsx from 'clsx'

// Context to share state between child components
interface DrawerContextType {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    onClose: () => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

const useDrawer = () => {
    const context = useContext(DrawerContext)
    if (!context) {
        throw new Error('useDrawer must be used within a SimpleDrawer')
    }
    return context
}

// SimpleDrawer - Main component (now controlled)
interface SimpleDrawerProps {
    children: React.ReactNode
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function SimpleDrawer({
    children,
    open,
    onOpenChange,
}: SimpleDrawerProps) {
    const onClose = () => {
        onOpenChange(false)
    }

    return (
        <DrawerContext.Provider value={{ isOpen: open, onOpenChange, onClose }}>
            {children}
        </DrawerContext.Provider>
    )
}

// DrawerTrigger - Component to trigger drawer
interface DrawerTriggerProps {
    children: React.ReactNode
    className?: string
    asChild?: boolean
}

export function DrawerTrigger({
    children,
    className,
    asChild,
}: DrawerTriggerProps) {
    const { onOpenChange } = useDrawer()

    const handleClick = () => {
        onOpenChange(true)
    }

    if (asChild) {
        // Clone the child element and add onClick handler
        const child = children as React.ReactElement<
            React.HTMLAttributes<HTMLElement>
        >
        return React.cloneElement(child, {
            onClick: (e: React.MouseEvent<HTMLElement>) => {
                // Call original onClick if exists
                if (child.props.onClick) {
                    child.props.onClick(e)
                }
                handleClick()
            },
        })
    }

    return (
        <div
            className={clsx('flex', className)}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </div>
    )
}

// DrawerContent - Drawer content
interface DrawerContentProps {
    children: React.ReactNode
    className?: string
}

export function DrawerContent({ children, className }: DrawerContentProps) {
    const { isOpen, onClose } = useDrawer()
    const contentRef = useRef<HTMLDivElement>(null)

    // Close drawer when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target as Node)
            ) {
                onClose()
            }
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when drawer is open
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={`drawer-overlay ${className || ''}`}>
            <div ref={contentRef} className="drawer-content">
                {children}
            </div>
        </div>
    )
}

// DrawerHeader - Drawer header
interface DrawerHeaderProps {
    children: React.ReactNode
    className?: string
}

export function DrawerHeader({ children, className }: DrawerHeaderProps) {
    return <div className={`drawer-header ${className || ''}`}>{children}</div>
}

// DrawerTitle - Drawer title
interface DrawerTitleProps {
    children: React.ReactNode
    className?: string
}

export function DrawerTitle({ children, className }: DrawerTitleProps) {
    return <h2 className={`drawer-title ${className || ''}`}>{children}</h2>
}

// DrawerDescription - Drawer description
interface DrawerDescriptionProps {
    children: React.ReactNode
    className?: string
}

export function DrawerDescription({
    children,
    className,
}: DrawerDescriptionProps) {
    return <p className={`drawer-description ${className || ''}`}>{children}</p>
}

// DrawerBody - Scrollable main content
interface DrawerBodyProps {
    children: React.ReactNode
    className?: string
}

export function DrawerBody({ children, className }: DrawerBodyProps) {
    return <div className={`drawer-body ${className || ''}`}>{children}</div>
}

// DrawerFooter - Drawer footer
interface DrawerFooterProps {
    children: React.ReactNode
    className?: string
}

export function DrawerFooter({ children, className }: DrawerFooterProps) {
    return <div className={`drawer-footer ${className || ''}`}>{children}</div>
}

// DrawerClose - Component to close drawer
interface DrawerCloseProps {
    children: React.ReactNode
    className?: string
    asChild?: boolean
}

export function DrawerClose({
    children,
    className,
    asChild,
}: DrawerCloseProps) {
    const { onClose } = useDrawer()

    if (asChild) {
        // Clone the child element and add onClick handler
        const child = children as React.ReactElement<
            React.HTMLAttributes<HTMLElement>
        >
        return React.cloneElement(child, {
            onClick: (e: React.MouseEvent<HTMLElement>) => {
                // Call original onClick if exists
                if (child.props.onClick) {
                    child.props.onClick(e)
                }
                onClose()
            },
        })
    }

    return (
        <div
            className={className}
            onClick={onClose}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </div>
    )
}

export function DrawerHeaderMenu() {
    return (
        <div className={`drawer-header drawer-header-menu`}>
            <div className="flex">
                <div className="drawer-header-menu-logo">
                    <img
                        src={IMAGES_CONSTANTS.logo.path}
                        alt={IMAGES_CONSTANTS.logo.alt}
                        width="148"
                        height="32"
                    />
                </div>
            </div>
            <div className="flex">
                <DrawerClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X />
                    </Button>
                </DrawerClose>
            </div>
        </div>
    )
}
