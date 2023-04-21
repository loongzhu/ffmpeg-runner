# ffmpeg-runner

ffmpeg-runner is a Python-based command-line tool that simplifies the execution of FFMpeg commands by providing a YAML-based configuration file and a template-based syntax for specifying input and output files.

## Usage

By using this tool, you can package an executable program that can execute FFMpeg commands.

You can run it using the .exe file, or start it using start.bat or start.vbs, and stop it using stop.bat or stop.vbs.

## Structure

```
├── ffmpeg-runner               # Source code directory
│   ├── dist                    # Packaged artifact
│       ├── assets              # FFMpeg program
│       ├── .env                # Environment variables during runtime
│       ├── ffmpeg-start.bat    # .bat file for running ffmpeg.exe
│       ├── ffmpeg-start.vbs    # .vbs file for running ffmpeg.exe
│       ├── ffmpeg-stop.bat     # .bat file for killing ffmpeg.exe
│       ├── ffmpeg-stop.vbs     # .vbs file for killing ffmpeg.exe
│       └── ffmpeg.exe          # The executable program that is running
│   ├── public                  # FFmpeg command builder module
│       └── mediamtx            # MediaMtx module(a simple RTSP server)
│   └── src                     # FFmpeg command builder module
│       ├── assets              # FFMpeg program
│       ├── build.js            # Script for building the application
│       ├── copy.js             # Script for copying crucial files
│       ├── main.js             # Main module
│       ├── scripts.js          # Generate a FFMpeg script
│       └── server.js           # Runner module
├── .env                        # Environment variables during runtime
├── .env.build                  # Environment variables during packaging
├── .gitignore                  # Git ignore file
├── LICENSE                     # License file
└── README.md                   # This file
```

## Content-related

You can find and download them through the following.

- [FFMpeg](https://github.com/FFmpeg/FFmpeg): FFMpeg program
- [mediamtx](https://github.com/aler9/mediamtx): MediaMtx module(a simple RTSP server)

## Development

```
# Clone
git clone https://github.com/MrZhuA00/ffmpeg-runner.git

cd ffmpeg-runner

npm install

# dev
npm run dev

# Build
npm run build
```

## License

Made with 💛

Published under [MIT License](https://github.com/MrZhuA00/ffmpeg-runner/blob/main/LICENSE).
