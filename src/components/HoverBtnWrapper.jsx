function HoverBtnWrapper({ children, px = 0.5, py = 0.5 }) {
  return (
    <div
      className={`inline-block cursor-pointer rounded-md p-8 text-[var(--primary-dark-blue)] hover:bg-stone-100`}
      style={{
        paddingLeft: px + "rem",
        paddingRight: px + "rem",
        paddingTop: py + "rem",
        paddingBottom: py + "rem",
      }}
    >
      {children}
    </div>
  );
}

export default HoverBtnWrapper;
