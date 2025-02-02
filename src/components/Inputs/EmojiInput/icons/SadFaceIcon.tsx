
export const SadFaceIcon = ({
    width = 36,
    height = 36,
    mainBg = '#4bd722',
    secondBg = '#377637',
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 36 36"
        {...props}
    >
        <path
            fill={mainBg}
            d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        ></path>
        <ellipse
            cx={11.5}
            cy={14.5}
            fill={secondBg}
            rx={2.5}
            ry={3.5}
        ></ellipse>
        <ellipse
            cx={24.5}
            cy={14.5}
            fill={secondBg}
            rx={2.5}
            ry={3.5}
        ></ellipse>
        <path
            fill={secondBg}
            d="M8.665 27.871a.5.5 0 0 0 .635.029c.039-.029 3.922-2.9 8.7-2.9c4.766 0 8.662 2.871 8.7 2.9a.5.5 0 0 0 .729-.657C27.3 27.029 24.212 22 18 22s-9.301 5.028-9.429 5.243a.5.5 0 0 0 .094.628"
        ></path>
    </svg>
);


