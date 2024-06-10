export default function Navigation({ menu, logo }) {
    return (
        <div className="flex justify-between bg-white items-center h-20 w-full px-3 border-b border-solid border-slate-300 sticky top-0 mb-5">
            <div className="w-96">
                <img src={logo ? logo : "http://placehold.it/200x60"} alt="Logo" />
            </div>
            <nav>
                <ul className="flex gap-5 ">
                    {menu.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.link}
                                target={item.target ? item.target : ""}
                                className={
                                    item.button
                                        ? "bg-slate-50 py-3 px-5 rounded-full border border-solid border-slate-600"
                                        : ""
                                }
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}