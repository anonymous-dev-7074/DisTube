export = Song;
import Discord from "discord.js";
import ytdl from "ytdl-core"
/** Class representing a song. */
declare class Song {
    /**
     * Create a song.
     * @param {ytdl.videoInfo|object} info Video info
     * @param {Discord.User} user Requested user
     * @param {boolean} [youtube=false] Weather or not the video is a Youtube video.
     */
    constructor(info: ytdl.videoInfo | object, user: Discord.User, youtube?: boolean);
    /**
     * `@2.6.0`
     * @type {boolean}
     */
    youtube: boolean;
    /**
     * User requested
     * @type {Discord.User}
     */
    user: Discord.User;
    /**
     * `@2.1.4` Youtube video id
     * @type {string}
     */
    id: string;
    /**
     * Song name aka video title.
     * @type {string}
     */
    name: string;
    /**
     * Song duration.
     * @type {number}
     */
    duration: number;
    /**
     * Formatted duration string `hh:mm:ss`.
     * @type {string}
     */
    formattedDuration: string;
    /**
     * Song URL.
     * @type {string}
     */
    url: string;
    /**
     * `@2.6.0` Stream / Download URL. (Not available with YouTube video)
     * @type {?string}
     */
    streamURL: any;
    /**
     * Song thumbnail.
     * @type {string}
     */
    thumbnail: string;
    /**
     * Related videos (Only available with YouTube video)
     * @type {?ytdl.relatedVideo[]}
     */
    related: ytdl.relatedVideo[] | null;
    /**
     * `@2.5.0` Indicates if the video is an active live.
     * @type {boolean}
     */
    isLive: boolean;
    /**
     * `@2.6.0` Song play count
     * @type {?number}
     */
    plays: number | null;
    /**
     * `@2.6.0` Song like count
     * @type {?number}
     */
    likes: number | null;
    /**
     * `@2.6.0` Song dislike count
     * @type {?number}
     */
    dislikes: number | null;
    /**
     * `@2.6.0` Song repost count
     * @type {?number}
     */
    reposts: number | null;
}