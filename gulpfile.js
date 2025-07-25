const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const rename = require('gulp-rename');

// Пути
const paths = {
  html: {
    src: 'src/pages/**/*.html',
    dest: 'dist/'
  },
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  vendorCSS: {
    src: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/swiper/swiper-bundle.min.css',
      'node_modules/@fancyapps/ui/dist/fancybox/fancybox.css'
    ],
    dest: 'dist/css/'
  },
  vendorJS: {
    src: [
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      'node_modules/swiper/swiper-bundle.min.js',
      'node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd.js'
    ],
    dest: 'dist/js/'
  },
  img: {
    src: 'src/img/**/*',
    dest: 'dist/img/'
  },
  fonts: {
    src: 'src/fonts/**/*',
    dest: 'dist/fonts/'
  }
};

// Очистка dist
function clean() {
  return del(['dist']);
}

// HTML (include компонентов)
function html() {
  return src(paths.html.src)
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// SCSS
function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// JS
function scripts() {
  return src(paths.scripts.src)
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Копирование vendor CSS
function vendorCSS() {
  return src(paths.vendorCSS.src)
    .pipe(dest(paths.vendorCSS.dest))
    .pipe(browserSync.stream());
}

// Копирование vendor JS
function vendorJS() {
  return src(paths.vendorJS.src)
    .pipe(dest(paths.vendorJS.dest))
    .pipe(browserSync.stream());
}

// Копирование изображений
function images() {
  return src(paths.img.src, { encoding: false, allowEmpty: true })
    .pipe(dest(paths.img.dest))
    .pipe(browserSync.stream());
}

// Копирование шрифтов
function fonts() {
  return src(paths.fonts.src, { encoding: false, allowEmpty: true })
    .pipe(dest(paths.fonts.dest))
    .pipe(browserSync.stream());
}

// Слежка
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  watch(['src/pages/**/*.html', 'src/components/**/*.html'], html);
  watch(['src/scss/**/*.scss', 'src/components/**/*.scss'], styles);
  watch('src/js/**/*.js', scripts);
  watch('src/img/**/*', images);
  watch('src/fonts/**/*', fonts);
}

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.vendorCSS = vendorCSS;
exports.vendorJS = vendorJS;
exports.images = images;
exports.fonts = fonts;

exports.default = series(
  clean,
  parallel(html, styles, scripts, vendorCSS, vendorJS, images, fonts),
  watchFiles
);

exports.build = series(
  clean,
  parallel(html, styles, scripts, vendorCSS, vendorJS, images, fonts)
);
