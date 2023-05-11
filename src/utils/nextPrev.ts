type Publishable = { isPublished: boolean };

function findNext<T extends Publishable>(contents: T[], content: T): T {
  const index = contents.indexOf(content);
  const nextIndex = index + 1;
  const nextEntry = contents[nextIndex];
  if (!nextEntry) {
    // console.log(contents[0]);
    return contents[0];
  }
  // console.log(nextEntry);
  return nextEntry;
}

function findPrev<T extends Publishable>(contents: T[], content: T): T {
  const index = contents.indexOf(content);
  const prevIndex = index - 1;
  const prevEntry = contents[prevIndex];
  if (!prevEntry) {
    // console.log(contents[contents.length - 1]);
    return contents[contents.length - 1];
  }
  // console.log(prevEntry);
  return prevEntry;
}

export function searchNextPublished<T extends Publishable>(contents: T[], content: T): T {
  const nextEntry = findNext(contents, content);
  if (nextEntry.isPublished) {
    return nextEntry;
  }
  return searchNextPublished(contents, nextEntry);
}

export function searchPrevPublished<T extends Publishable>(contents: T[], content: T): T {
  const prevEntry = findPrev(contents, content);
  if (prevEntry.isPublished) {
    return prevEntry;
  }
  return searchPrevPublished(contents, prevEntry);
}
