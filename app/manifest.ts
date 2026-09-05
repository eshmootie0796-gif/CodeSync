import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "CodeSync",
        short_name: "CodeSync",
        description: "Developer workspace and dashboard",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        orientation: "portrait",
        icons: [
            {
                src: "/Logo.png",
                sizes: "192x192",
                type: "image/png",
            },
            
        ],
    }
}