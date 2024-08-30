const Sidebar = () => {
  return (
    <aside className="w-64 h-full text-black p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">2wei</h2>
        <ul>
          <li className="mb-2">
            <a href="#">about</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="mb-2">
            <a href="#">game</a>
          </li>
          <li className="mb-2">
            <a href="#">public</a>
          </li>
          <li className="mb-2">
            <a href="#">exhibition</a>
          </li>
          <li className="mb-2">
            <a href="#">publication</a>
          </li>
          <li className="mb-2">
            <a href="#">illustration</a>
          </li>
          <li className="mb-2">
            <a href="#">other</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
