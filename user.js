/* Firefox user.js start
-AUTHOR: geck
-LICENSE: GPLv3
*/

// Arkenfox user.js start
// v99.0, 4ff9317
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [FF79+]
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
user_pref("browser.search.region", "US");
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
user_pref("network.connectivity-service.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.send_pings", false); // [DEFAULT: false]
user_pref("browser.send_pings.require_same_host", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.trr.mode", 5);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
user_pref("browser.formfill.enable", false);
user_pref("security.ask_for_password", 2);
user_pref("security.password_lifetime", 5);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1); // [DEFAULT: 1]
user_pref("security.OCSP.require", true);
user_pref("security.pki.sha1_enforcement_level", 1);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.mixed_content.block_display_content", true);
user_pref("dom.security.https_only_mode", true); // [FF76+]
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("network.http.referer.XOriginPolicy", 1);
user_pref("network.http.referer.XOriginTrimmingPolicy", 1);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.eme.enabled", false);
user_pref("dom.disable_beforeunload", true);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_open_during_load", true);
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("beacon.enabled", false);
user_pref("accessibility.force_disabled", 1);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
user_pref("middlemouse.contentLoadURL", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("network.IDN_show_punycode", true);
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
user_pref("permissions.delegation.enabled", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.partition.serviceWorkers", true);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // [FF58+]
user_pref("privacy.sanitize.timeSpan", 4);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("signon.rememberSignons", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("browser.tabs.warnOnClose", false); // [DEFAULT false FF94+]
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuitShortcut", false); // [FF94+]
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
// Arkenfox user.js end

// Photon user.js start
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.proton.enabled", true);
user_pref("browser.proton.places-tooltip.enabled", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("userChrome.tab.connect_to_window", true);
user_pref("userChrome.tab.color_like_toolbar", true);
user_pref("userChrome.tab.photon_like_padding", true);
user_pref("userChrome.tab.static_separator", true);
user_pref("userChrome.tab.newtab_button_smaller", true);
user_pref("userChrome.icon.panel_photon", true);
user_pref("userChrome.tab.photon_like_contextline", true);
user_pref("userChrome.rounding.square_tab", true);
user_pref("userChrome.compatiblity.os.linux_non_native_titlebar_button", true);
user_pref("userChrome.theme.proton_color.dark_blue_accent", true);
user_pref("userChrome.rounding.square_button", true);
user_pref("userChrome.rounding.square_panel", true);
user_pref("userChrome.rounding.square_panelitem", true);
user_pref("userChrome.rounding.square_menupopup", true);
user_pref("userChrome.rounding.square_menuitem", true);
user_pref("userChrome.rounding.square_field", true);
user_pref("userChrome.rounding.square_checklabel", true);
user_pref("userChrome.tab.on_bottom", false);
user_pref("userChrome.tab.on_bottom.above_bookmark", false);
user_pref("userChrome.tab.on_bottom.menubar_on_top", false);
user_pref("userChrome.tab.centered_label", true);
user_pref("userContent.page.proton_color.dark_blue_accent", true);
user_pref("userContent.page.proton_color.system_accent", true);
user_pref("userChrome.compatibility.theme", true);
user_pref("userChrome.compatibility.os", true);
user_pref("userChrome.theme.built_in_contrast", true);
user_pref("userChrome.theme.system_default", true);
user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true);
user_pref("userChrome.theme.fully_color", true);
user_pref("userChrome.theme.fully_dark", true);
user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);
user_pref("userChrome.padding.tabbar_width", true);
user_pref("userChrome.padding.tabbar_height", true);
user_pref("userChrome.padding.toolbar_button", true);
user_pref("userChrome.padding.navbar_width", true);
user_pref("userChrome.padding.urlbar", true);
user_pref("userChrome.padding.bookmarkbar", true);
user_pref("userChrome.padding.infobar", true);
user_pref("userChrome.padding.menu", true);
user_pref("userChrome.padding.bookmark_menu", true);
user_pref("userChrome.padding.global_menubar", true);
user_pref("userChrome.padding.panel", true);
user_pref("userChrome.padding.popup_panel", true);
user_pref("userChrome.tab.multi_selected", true);
user_pref("userChrome.tab.unloaded", true);
user_pref("userChrome.tab.letters_cleary", true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label", true);
user_pref("userChrome.tab.sound_with_favicons", true);
user_pref("userChrome.tab.pip", true);
user_pref("userChrome.tab.container", true);
user_pref("userChrome.tab.crashed", true);
user_pref("userChrome.fullscreen.overlap", true);
user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.panel", true);
user_pref("userChrome.icon.menu", true);
user_pref("userChrome.icon.context_menu", true);
user_pref("userChrome.icon.global_menu", true);
user_pref("userChrome.icon.global_menubar", true);
user_pref("userContent.player.ui", true);
user_pref("userContent.player.icon", true);
user_pref("userContent.player.noaudio", true);
user_pref("userContent.player.size", true);
user_pref("userContent.player.click_to_play", true);
user_pref("userContent.player.animate", true);
user_pref("userContent.newTab.field_border", true);
user_pref("userContent.newTab.full_icon", true);
user_pref("userContent.newTab.animate", true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true);
user_pref("userContent.page.proton", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.tabs.drawInTitlebar", true);
user_pref("browser.tabs.inTitlebar", 1);
user_pref("apz.allow_zooming", true); 
user_pref("apz.force_disable_desktop_zooming_scrollbars", false);
user_pref("apz.paint_skipping.enabled", true);
user_pref("apz.windows.use_direct_manipulation", true);
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.12");
user_pref("general.smoothScroll.durationToIntervalRatio", 1000);
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 0);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 100);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 0);
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 10);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.20");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 1000);
user_pref("general.smoothScroll.other.durationMaxMS", 100);
user_pref("general.smoothScroll.other.durationMinMS", 0);
user_pref("general.smoothScroll.pages.durationMaxMS", 100);
user_pref("general.smoothScroll.pages.durationMinMS", 0);
user_pref("general.smoothScroll.pixels.durationMaxMS", 100);
user_pref("general.smoothScroll.pixels.durationMinMS", 0);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 100);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 0);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");
user_pref("layers.async-pan-zoom.enabled", true);
user_pref("layout.css.scroll-behavior.spring-constant", "250.0");
user_pref("mousewheel.acceleration.factor", 3);
user_pref("mousewheel.acceleration.start", -1);
user_pref("mousewheel.default.delta_multiplier_x", 100);
user_pref("mousewheel.default.delta_multiplier_y", 100);
user_pref("mousewheel.default.delta_multiplier_z", 100);
user_pref("mousewheel.min_line_scroll_amount", 0);
user_pref("mousewheel.system_scroll_override.enabled", false);
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);
user_pref("mousewheel.transaction.timeout", 1500);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 3);
// Photon user.js end

// Custom
user_pref("security.secure_connection_icon_color_gray", false);
user_pref("browser.download.autohideButton", false);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
user_pref("general.autoScroll", true);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.screenshots.disabled", true);
user_pref("identity.fxaccounts.enabled", false);
user_pref("reader.parse-on-load.enabled", false);
user_pref("middlemouse.paste", false);
