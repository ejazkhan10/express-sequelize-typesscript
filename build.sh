find . -name '*.js' -not -path "./migrations/*" -not -path "./node_modules/*" -exec rm -f {} \;
tsc