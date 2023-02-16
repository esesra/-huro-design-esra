import { settings } from "./settings";

const dynamicTitle = (title, setting = settings.siteName) => {
    if (!title) {
        document.title = ` Home | ${setting}`;
    } else {
        document.title = `${title} | ${setting}`;
    }
}

export default dynamicTitle;