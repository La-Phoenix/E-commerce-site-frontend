import { Alert } from "react-bootstrap";

/**
 * Customn Message Box
 * @returns JSX.Element
 */
export default function MessageBox({
    variant = 'info',
    children
}: {
        variant?: string,
    children: React.ReactNode
}) {
  return (
      <Alert variant={variant || 'info'}>{ children}</Alert>
  )
}
