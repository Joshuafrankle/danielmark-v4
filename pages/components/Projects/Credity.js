import FadeIn from "../FadeIn";
import Link from "next/link";
import Chip from "@material-ui/core/Chip";

export default function Credity() {
  const tech = [
    "Cordova",
    "PHP",
    "Apache",
    "Bootstrap",
    "Firestore",
    "AJAX",
    "jQuery",
    "Git",
    "Cloudflare",
  ];

  return (
    <>
      <FadeIn>
        <hr className="mt-4" />
        <div>
          <div>
            <h6 className="middle-underline d-inline">Credity - Cash App</h6>
          </div>
          <p className="mt-2">
            Credity is a cross-platform cash management app that can track all
            your financial transactions and keep a track of your expenditure and
            total income. It can also project estimated month-end costs based on
            your current rate of expenditure and compare it against previous
            month's expenditures in the form of a graph.
          </p>
          {/* <h6 className="mt-4">Releases</h6> */}
          <div className="d-none">
            <Link passHref href={""}>
              <a className="grey-to-white text-decoration-none">v1 (latest)</a>
            </Link>
          </div>
          <h6 className="mt-4">Technologies</h6>
          <div class="tech-badges">
            {tech.map((chip) => {
              return <Chip size="small" key={chip} label={chip} />;
            })}
          </div>
        </div>
      </FadeIn>
    </>
  );
}
