import "./work.scss"

export default function Work() {

  const data = [
    {
      id: "1",
      title: "ELLE ACT/VE! FEST/VAL 2021",
      subTitle: "DIGITAL EXPERIENCES",
      category: "CAMPAIGN",
      img:
        "https://cdn.dribbble.com/users/1126935/screenshots/10506665/media/b591f92273cc9ea08ea1a8dd567ff05a.png?compress=1&resize=400x300&vertical=top",
    },
    {
      id: "2",
      title: "JAL FL/GHT FUN! app",
      subTitle: "DIGITAL EXPERIENCES",
      category: "WEBSITE / APP",
      img:
        "https://www.designyourway.net/diverse/3/flatdesui/11495671.jpg",
    },
    {
      id: "3",
      title: "N/KE SB \"JAPAN D/ARY\"",
      subTitle: "DIGITAL EXPERIENCES",
      category: "SOCIAL CONTENTS",
      img:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/08f9307361143.560c83f06019f.gif",
    },
  ];


  return (
    <div className='work' id="work">
      <div className="left">
        <h4>recent works___</h4>
        <div className="allProj">
          <p>ALL PROJECT</p>
        </div>
      </div>
      <div className="right">
        {data.map((d) => (<div className="work">
          <img src={d.img} alt="" />
          <div className="subTitle">{d.subTitle}</div>
          <div className="title">{d.title}</div>
          <div className="category">{d.category}</div>
        </div>
        ))}
      </div>
    </div>
  );
}
