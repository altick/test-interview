import { useEffect, useState } from "react";

export const BrokenComponent: React.FC = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setValue(value + 1);
        }, 1000);
    }, []);

    return (
        <div>{value}</div>
    )
}