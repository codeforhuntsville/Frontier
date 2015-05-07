GIT_HASH=`git rev-parse --short HEAD`
IMAGE_NAME=codeforhuntsville/frontier
IMAGE_VERSION=$(GIT_HASH)

# ..

build:
	docker build -t $(IMAGE_NAME):$(IMAGE_VERSION) .
	docker build -t $(IMAGE_NAME):latest .

clean:
	docker rmi -f $(docker images -f "dangling=true" -q)

debug:
	docker run -it --rm --entrypoint /bin/bash $(IMAGE_NAME):$(IMAGE_VERSION)

# deploy:
# 	docker push $(IMAGE_NAME):$(IMAGE_VERSION)
# 	docker push $(IMAGE_NAME):latest

run:
	docker run -it --rm $(IMAGE_NAME):$(IMAGE_VERSION)

# ..

.PHONY: build clean debug deploy run
