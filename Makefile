.SILENT:
SHELL=/bin/bash
.SHELLFLAGS=--norc --noprofile -e -u -o pipefail -c
start_win:
	gcc -std=c99 -Wall -Wpedantic -o  dist/doctorZ.exe doctorZ.c 
	./dist/doctorZ.exe

start_lin:
	gcc -std=c99 -Wall -Wpedantic -o  dist/doctorZ.out doctorZ.c 
	./dist/doctorZ.out

install_emsc: 
	git clone https://github.com/emscripten-core/emsdk.git 
	cd emsdk/ && emsdk install latest && emsdk activate latest && emsdk_env.bat && emcc doctorZ.c -o doctorZ.html
	npm i http-server -g
	
run_live-server:
	cd ../emsdk && http-server
