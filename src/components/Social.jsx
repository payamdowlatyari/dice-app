import { social } from "./data/about";

export default function Social() {
    return (
      <h3 className="three">
        {social.map((item) => {
          return <a href={item.url} >{item.name}</a>;
        })}
      </h3>
    );
  }