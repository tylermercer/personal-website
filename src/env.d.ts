/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime {
        env: Env
    }
    interface Env {
        SENDGRID_API_KEY: string;
        SENDGRID_LIST_ID: string;
        SENDGRID_WELCOME_TEMPLATE_ID: string;
    }
}