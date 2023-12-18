fmt:
    prettier --write .
    just --fmt --unstable

check:
    autocorrect --lint
