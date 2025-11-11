
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const LSCOLORS: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const USER_ZDOTDIR: string;
	export const LESSHISTFILE: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const LIB_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const HYDE_STATE_HOME: string;
	export const NVM_INC: string;
	export const TERM_PROGRAM_VERSION: string;
	export const fontsDir: string;
	export const XDG_BACKEND: string;
	export const HYDE_SCRIPTS_PATH: string;
	export const npm_config_npm_globalconfig: string;
	export const QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
	export const HISTSIZE: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const XDG_DATA_HOME: string;
	export const npm_config_verify_deps_before_run: string;
	export const npm_config__jsr_registry: string;
	export const SHELL_SESSION_ID: string;
	export const XDG_CONFIG_HOME: string;
	export const thmbDir: string;
	export const SHARE_DIR: string;
	export const themesDir: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const LIBVA_DRIVER_NAME: string;
	export const cacheDir: string;
	export const DESKTOP_SESSION: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const NO_AT_BRIDGE: string;
	export const npm_config_globalconfig: string;
	export const EDITOR: string;
	export const SDKMAN_BROKER_API: string;
	export const SCREENRC: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const PARALLEL_HOME: string;
	export const XDG_VIDEOS_DIR: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const PNPM_HOME: string;
	export const HYDE_CONFIG_HOME: string;
	export const XDG_PICTURES_DIR: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MOTD_SHOWN: string;
	export const VSCODE_INJECTION: string;
	export const HYPRLAND_CONFIG: string;
	export const HOME: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const LANG: string;
	export const HISTFILE: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const npm_package_version: string;
	export const PYTHONSTARTUP: string;
	export const STARSHIP_SHELL: string;
	export const STARSHIP_CACHE: string;
	export const WAYLAND_DISPLAY: string;
	export const STARSHIP_CONFIG: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const PROFILEHOME: string;
	export const hashMech: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const GIT_ASKPASS: string;
	export const enableWallDcol: string;
	export const XDG_SEAT_PATH: string;
	export const XDG_MUSIC_DIR: string;
	export const XDG_TEMPLATES_DIR: string;
	export const INVOCATION_ID: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const SAVEHIST: string;
	export const KONSOLE_VERSION: string;
	export const THEMES_DIR: string;
	export const INIT_CWD: string;
	export const FONTS_DIR: string;
	export const CHROME_DESKTOP: string;
	export const STARSHIP_SESSION_KEY: string;
	export const QT_QPA_PLATFORM: string;
	export const XDG_CACHE_HOME: string;
	export const npm_lifecycle_script: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DESKTOP_DIR: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ZSH: string;
	export const PYTHON_BASIC_REPL: string;
	export const ZDOTDIR: string;
	export const HYDE_CACHE_HOME: string;
	export const iconsDir: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const BIN_DIR: string;
	export const scrDir: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const COLORFGBG: string;
	export const HYDE_SHELL_INIT: string;
	export const ICONS_DIR: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const SDKMAN_DIR: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const PAGER: string;
	export const HYDE_THEME: string;
	export const XDG_VTNR: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const XDG_STATE_HOME: string;
	export const npm_execpath: string;
	export const HYDE_RUNTIME_DIR: string;
	export const XDG_RUNTIME_DIR: string;
	export const confDir: string;
	export const NODE_PATH: string;
	export const HYDE_THEME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const APIKEY: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const XDG_DATA_DIRS: string;
	export const dcolDir: string;
	export const GDK_BACKEND: string;
	export const PATH: string;
	export const QUARKUS_HOME: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const GDK_SCALE: string;
	export const npm_config_node_gyp: string;
	export const hydeConfDir: string;
	export const GBM_BACKEND: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SDKMAN_PLATFORM: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const npm_config_registry: string;
	export const hypr_width: string;
	export const HYDE_DATA_HOME: string;
	export const hypr_border: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		LSCOLORS: string;
		npm_command: string;
		WINDOWID: string;
		USER_ZDOTDIR: string;
		LESSHISTFILE: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		LIB_DIR: string;
		XDG_SESSION_PATH: string;
		HYDE_STATE_HOME: string;
		NVM_INC: string;
		TERM_PROGRAM_VERSION: string;
		fontsDir: string;
		XDG_BACKEND: string;
		HYDE_SCRIPTS_PATH: string;
		npm_config_npm_globalconfig: string;
		QT_WAYLAND_DISABLE_WINDOWDECORATION: string;
		HISTSIZE: string;
		LANGUAGE: string;
		NODE: string;
		XDG_DATA_HOME: string;
		npm_config_verify_deps_before_run: string;
		npm_config__jsr_registry: string;
		SHELL_SESSION_ID: string;
		XDG_CONFIG_HOME: string;
		thmbDir: string;
		SHARE_DIR: string;
		themesDir: string;
		SDKMAN_CANDIDATES_DIR: string;
		LIBVA_DRIVER_NAME: string;
		cacheDir: string;
		DESKTOP_SESSION: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		NO_AT_BRIDGE: string;
		npm_config_globalconfig: string;
		EDITOR: string;
		SDKMAN_BROKER_API: string;
		SCREENRC: string;
		XDG_SEAT: string;
		PWD: string;
		PARALLEL_HOME: string;
		XDG_VIDEOS_DIR: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		PNPM_HOME: string;
		HYDE_CONFIG_HOME: string;
		XDG_PICTURES_DIR: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MOTD_SHOWN: string;
		VSCODE_INJECTION: string;
		HYPRLAND_CONFIG: string;
		HOME: string;
		XDG_PUBLICSHARE_DIR: string;
		LANG: string;
		HISTFILE: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		KONSOLE_DBUS_SERVICE: string;
		npm_package_version: string;
		PYTHONSTARTUP: string;
		STARSHIP_SHELL: string;
		STARSHIP_CACHE: string;
		WAYLAND_DISPLAY: string;
		STARSHIP_CONFIG: string;
		KONSOLE_DBUS_SESSION: string;
		PROFILEHOME: string;
		hashMech: string;
		XDG_DOWNLOAD_DIR: string;
		GIT_ASKPASS: string;
		enableWallDcol: string;
		XDG_SEAT_PATH: string;
		XDG_MUSIC_DIR: string;
		XDG_TEMPLATES_DIR: string;
		INVOCATION_ID: string;
		pnpm_config_verify_deps_before_run: string;
		SAVEHIST: string;
		KONSOLE_VERSION: string;
		THEMES_DIR: string;
		INIT_CWD: string;
		FONTS_DIR: string;
		CHROME_DESKTOP: string;
		STARSHIP_SESSION_KEY: string;
		QT_QPA_PLATFORM: string;
		XDG_CACHE_HOME: string;
		npm_lifecycle_script: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		XDG_SESSION_CLASS: string;
		XDG_DESKTOP_DIR: string;
		TERM: string;
		npm_package_name: string;
		ZSH: string;
		PYTHON_BASIC_REPL: string;
		ZDOTDIR: string;
		HYDE_CACHE_HOME: string;
		iconsDir: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		BIN_DIR: string;
		scrDir: string;
		VSCODE_GIT_IPC_HANDLE: string;
		COLORFGBG: string;
		HYDE_SHELL_INIT: string;
		ICONS_DIR: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		SDKMAN_DIR: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		MOZ_ENABLE_WAYLAND: string;
		PAGER: string;
		HYDE_THEME: string;
		XDG_VTNR: string;
		SDKMAN_CANDIDATES_API: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		PNPM_SCRIPT_SRC_DIR: string;
		XDG_STATE_HOME: string;
		npm_execpath: string;
		HYDE_RUNTIME_DIR: string;
		XDG_RUNTIME_DIR: string;
		confDir: string;
		NODE_PATH: string;
		HYDE_THEME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		XDG_DOCUMENTS_DIR: string;
		APIKEY: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		XDG_DATA_DIRS: string;
		dcolDir: string;
		GDK_BACKEND: string;
		PATH: string;
		QUARKUS_HOME: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		GDK_SCALE: string;
		npm_config_node_gyp: string;
		hydeConfDir: string;
		GBM_BACKEND: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SDKMAN_PLATFORM: string;
		MAIL: string;
		NVM_BIN: string;
		npm_config_registry: string;
		hypr_width: string;
		HYDE_DATA_HOME: string;
		hypr_border: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		KONSOLE_DBUS_WINDOW: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
