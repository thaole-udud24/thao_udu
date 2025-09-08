
class BookManager:
    def __init__(self):
        self.books = []

    def add_book(self, title, author):
                book = BookManager(title, author)
                self.books.append(book)
    def display_books(self):
                for book in self.books:
                    print(book)
if __name__ == "__main__":
            manager = BookManager()
            while True:
                title = input("Nhập tên sách (hoặc nhấn Enter để kết thúc): ")
                if not title:
                    break
                author = input("Nhập tên tác giả: ")
                manager.add_book(title, author)
            print("\nDanh sách sách đã nhập:")
            manager.display_books()
            