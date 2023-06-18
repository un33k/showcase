import { NewTabLink } from "@showcase/ui";

export default function AboutContent() {
  return (
    <div className="container">
      <h1 className="title">About Us</h1>
      <p className="description m-10">
        Showcase is a platform for political individuals or organizations to
        connect with their constituents.
        <NewTabLink href="/">Home</NewTabLink>
      </p>
    </div>
  );
}
