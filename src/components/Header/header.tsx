import "./header.scss";

const links: string[] = ["About", "Projects", "Contact"];

export default function Header() {
  return (
    <>
      <div className=" flex justify-center items-center mt-[20px]" data-aos="fade-up">
        <header
          className="header__container bc py-4 p-[30px] rounded-[10px] bg-[#0C0E23]  shadow-md"
        >
          <div className="header max-w-screen-xl mx-auto px-4 ">
            <nav className="header__nav">
              <ul className="flex gap-[20px] items-center justify-between space-x-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
