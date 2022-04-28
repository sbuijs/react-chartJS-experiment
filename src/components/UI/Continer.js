export const Container = ({ children, className }) => {
    const classes = `container ${className}`
    return (
        <div className={classes}>
            {children}
        </div>
    )
}