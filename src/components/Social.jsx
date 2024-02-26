import { social } from "./data/about";

export default function Social() {
    return (
        <div className='menu__item'>
        {social.map((item) => {
          return <a className='menu__item-inner' href={item.url} >{item.name}</a>;
        })}
      </div>
    );
  }