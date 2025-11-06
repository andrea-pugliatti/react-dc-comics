import SiteLinks from "./SiteLinks";
import Socials from "./Socials";

export default function Footer({ siteLinks, socialLinks, signupLink }) {
	return (
		<footer>
			<SiteLinks links={siteLinks} />
			<Socials links={socialLinks} signupLink={signupLink} />
		</footer>
	);
}
