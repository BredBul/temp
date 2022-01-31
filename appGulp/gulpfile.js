
let project_folder = require("path").basename(__dirname);
let source_folder  = "app";

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    }, 
    src: {
        htaccess: source_folder + "/.htaccess",
        php: source_folder + "/*.php",
        html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
        filecss: source_folder + "/css/**/*",
        css: [source_folder + "/scss/*.scss", "!" + source_folder + "/_*.scss"],
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*",
        fonts: source_folder + "/fonts/**/*",
    },
    watch: {
        php: source_folder + "/**/*.php",
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.*",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*"
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require("gulp");
    gulp          = require("gulp");
    browsersync   = require("browser-sync").create();
    fileinclude   = require("gulp-file-include");
    del           = require("del");
    scss          = require("gulp-sass");
    autoprefixer  = require("gulp-autoprefixer");
    group_media   = require("gulp-group-css-media-queries");
    clean_css     = require("gulp-clean-css");
    rename        = require("gulp-rename");
    uglify        = require("gulp-uglify-es").default;
    webp          = require("gulp-webp");
    webphtml      = require("gulp-webp-html");
    webpcss       = require("gulp-webp-css");
    htmlminifier  = require("gulp-html-minifier");
    
function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

function htaccess() {
    return src(path.src.htaccess)
    .pipe(dest(path.build.html))
}
function php() {
    return src(path.src.php)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(
            rename({
                extname: ".min.html"
            })
        )
        .pipe(htmlminifier({collapseWhitespace: true,removeComments: true}))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function filecss() {
    return src(path.src.filecss)
    .pipe(dest(path.build.css))
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 10 versions"],
                cascade: true,
                grid: true
            })
    )   
        .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70
            })
    )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(browsersync.stream())
}

function plugins() {
    return src('node_modules/jquery/dist/jquery.min.js')
    .pipe(dest(path.build.js))
}
function fonts() {
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function watchFiles(params) {
    gulp.watch([path.watch.php], php);
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(php, htaccess, html, css, js, images, fonts, filecss, plugins));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.plugins      = plugins;
exports.fonts        = fonts;
exports.images       = images;
exports.js           = js;
exports.filecss      = filecss;
exports.css          = css;
exports.html         = html;
exports.php          = php;
exports.htaccess     = htaccess;
exports.build        = build;
exports.watch        = watch;
exports.default      = watch;