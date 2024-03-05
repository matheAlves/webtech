import Image from "next/image";
const Button = ({ text }) => {
    return (
        <Image src="/button.svg" width={250} height={250} alt="Picture of the author" />
    )
}

export default Button;