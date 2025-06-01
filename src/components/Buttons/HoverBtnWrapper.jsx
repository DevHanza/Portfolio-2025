function HoverBtnWrapper({ children, px = 0.5, py = 0.5 }) {
  return (
    <div
      className={`inline-block cursor-pointer rounded-md hover:bg-stone-200/50`}
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