import Posts from "./components/Posts"
import MyProfilePic from './components/MyProfilePic'

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Maryam</span>.
        </span>
      </p>
      <Posts />
    </div>
  );
}
