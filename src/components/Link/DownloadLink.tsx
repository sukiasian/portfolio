import { ReactNode } from "react";

interface DownloadLinkProps { 
	link: string;
	classNames?: string;
	children: ReactNode | string;
}

export default function DownloadLink({ classNames, link, children }: DownloadLinkProps): ReactNode { 
	return <a className={`link with-icon ${classNames || ''}`} href={link} download>
			<div className="content">
				<div id="download-icon" />
				<p> {children}</p>
			</div>
		</a>;
}