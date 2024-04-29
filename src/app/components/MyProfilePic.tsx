import Image from "next/image"

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-slate-800 drop-shadow-xl shadow-black rounded-full mx-auto mt-16"
                src="/images/maryam.jpg"
                width={200}
                height={200}
                alt="Maryam Habibpour"
                priority={true}
            />
        </section>
    )
}