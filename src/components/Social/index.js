import React from "react";
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiFillGithub,
	AiFillYoutube,
	AiFillInstagram,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { social } from "../../data/portfolio";

const SOCIAL_SIZE = 26;
const SOCIAL_CLASS = "fill-gray-600 mr-1";

const Social = () => {
	return (
		<div className="py-2 flex flex-row">
			{social.facebook && (
				<a href={social.facebook} rel="noreferrer" target="_blank">
					<AiFillFacebook
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillFacebook>
				</a>
			)}
			{social.twitter && (
				<a href={social.twitter} rel="noreferrer" target="_blank">
					<AiFillTwitterSquare
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillTwitterSquare>
				</a>
			)}
			{social.linkedin && (
				<a href={social.linkedin} rel="noreferrer" target="_blank">
					<AiFillLinkedin
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillLinkedin>
				</a>
			)}
			{social.github && (
				<a href={social.github} rel="noreferrer" target="_blank">
					<AiFillGithub
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillGithub>
				</a>
			)}
			{social.youtube && (
				<a href={social.youtube} rel="noreferrer" target="_blank">
					<AiFillYoutube
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillYoutube>
				</a>
			)}
			{social.instagram && (
				<a href={social.instagram} rel="noreferrer" target="_blank">
					<AiFillInstagram
						size={SOCIAL_SIZE}
						className={SOCIAL_CLASS}
					></AiFillInstagram>
				</a>
			)}
			{social.website && (
				<a href={social.website} rel="noreferrer" target="_blank">
					<FaGlobe size={SOCIAL_SIZE - 2} className={SOCIAL_CLASS}></FaGlobe>
				</a>
			)}
		</div>
	);
};

export default Social;
