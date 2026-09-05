import { useCallback, useRef } from "react"

export interface DragCallbackState {
    start: boolean
    end: boolean
    e: React.PointerEvent<HTMLDivElement>
}

function useDnd(cb: (state: DragCallbackState) => void) {
    const elementRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)

    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        isDragging.current = true
        elementRef.current?.setPointerCapture(e.pointerId)
        cb({ start: true, end: false, e })
    }, [cb])

    const onPointerMove = useCallback(
        (e: React.PointerEvent<HTMLDivElement>) => {
            if (!isDragging.current) return
            cb({ start: false, end: false, e })
        }, [cb])

    const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        isDragging.current = false
        elementRef.current?.releasePointerCapture(e.pointerId)
        cb({ start: false, end: true, e })
    }, [cb])

    return ({ elementRef, onPointerDown, onPointerMove, onPointerUp })
}

export default useDnd