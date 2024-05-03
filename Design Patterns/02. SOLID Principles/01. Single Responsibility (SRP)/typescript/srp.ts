//////////////
//SRP THEORY//
//////////////
class User {
  constructor(name: string, email: string) {}
}

class UserAuthentication {
  constructor(user: User) {}

  authenticate(password: string) {
    // implementation logic here
  }
}

///////////////////
//SRP APPLICATION//
///////////////////

class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  // Methods related to content management
  createPost() {
    // Implementation here
  }

  updatePost() {
    // Implementation here
  }

  deletePost() {
    // Implementation here
  }
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  // Method related to post display
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

class BlogPostJson {
  constructor(public blogPost: BlogPost) {}

  // Method related to post display
  returnJSON() {
    return JSON.stringify({
      title: this.blogPost.title,
      content: this.blogPost.content,
    });
  }
}
