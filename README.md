# literify

Quick-and-dirty implementation of browserify transform for [literate-programming-lib](https://github.com/jostylr/literate-programming-lib)

## Usage

```javascript
gulp.task('build', function () {
	return browserify('src/index.md'), {
			debug: true,
			extensions: ['.md'],
			standalone: 'MyLib'
		})
		.transform(literify)
		.bundle()
		...
});
```


## License

[MIT-LICENSE](https://github.com/azaviruha/literify/blob/master/LICENSE)
