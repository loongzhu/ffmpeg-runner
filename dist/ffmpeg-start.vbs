Set WshShell = CreateObject("WScript.Shell")
cmds = WshShell.Run("ffmpeg.exe", 0)
Set WshShell = Nothing