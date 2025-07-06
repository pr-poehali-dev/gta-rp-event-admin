import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({
    name: "",
    description: "",
    type: "",
    participants: "",
    rewards: "",
  });

  const eventStats = {
    totalEvents: 47,
    activeEvents: 8,
    completedToday: 3,
    pendingReports: 12,
  };

  const navigationCards = [
    {
      title: "Состав",
      icon: "Users",
      description: "Управление командой админов",
      color: "bg-blue-500",
    },
    {
      title: "Правила мероприятий",
      icon: "BookOpen",
      description: "Регламенты и инструкции",
      color: "bg-green-500",
    },
    {
      title: "Фиксация деятельности",
      icon: "FileText",
      description: "Логи и записи действий",
      color: "bg-purple-500",
    },
    {
      title: "Еженедельная отчетность",
      icon: "Calendar",
      description: "Отчёты по неделям",
      color: "bg-orange-500",
    },
    {
      title: "ГМП",
      icon: "Shield",
      description: "Система наказаний",
      color: "bg-red-500",
    },
    {
      title: "Статистика",
      icon: "BarChart3",
      description: "Аналитика и метрики",
      color: "bg-indigo-500",
    },
    {
      title: "Оружие, скины и авто",
      icon: "Gamepad2",
      description: "Игровые предметы",
      color: "bg-yellow-500",
    },
    {
      title: "Настройки",
      icon: "Settings",
      description: "Конфигурация системы",
      color: "bg-gray-500",
    },
  ];

  const recentActivity = [
    {
      action: 'Создан ивент "Гонки на выживание"',
      admin: "AdminName",
      time: "2 мин назад",
    },
    {
      action: "Выдано наказание за нарушение",
      admin: "AdminName2",
      time: "15 мин назад",
    },
    {
      action: 'Завершён ивент "Захват территории"',
      admin: "AdminName3",
      time: "1 час назад",
    },
  ];

  const teamMembers = [
    {
      name: "Александр Иванов",
      role: "Главный администратор",
      status: "Онлайн",
      events: 23,
    },
    {
      name: "Максим Петров",
      role: "Ивент-мастер",
      status: "Онлайн",
      events: 18,
    },
    {
      name: "Елена Сидорова",
      role: "Помощник админа",
      status: "Отошёл",
      events: 12,
    },
    { name: "Дмитрий Козлов", role: "Модератор", status: "Оффлайн", events: 8 },
  ];

  const activityLogs = [
    {
      time: "21:30:15",
      admin: "AdminName",
      action: 'Создан ивент "Гонки на выживание"',
      details: "Участники: 15 чел. Награды: 50000$",
    },
    {
      time: "21:15:22",
      admin: "AdminName2",
      action: "Выдано наказание игроку ID:4521",
      details: "Причина: Нарушение правил ивента. Наказание: Кик",
    },
    {
      time: "20:45:33",
      admin: "AdminName3",
      action: 'Завершён ивент "Захват территории"',
      details: 'Победитель: Команда "Альфа". Награды розданы',
    },
  ];

  const renderSectionContent = (section: string) => {
    switch (section) {
      case "Состав":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Команда администраторов</h3>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Добавить админа
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Имя</TableHead>
                  <TableHead>Роль</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Ивенты</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.role}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          member.status === "Онлайн"
                            ? "default"
                            : member.status === "Отошёл"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.events}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Icon name="Edit" size={14} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      case "Правила мероприятий":
        return (
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">Общие правила</TabsTrigger>
              <TabsTrigger value="conduct">Поведение</TabsTrigger>
              <TabsTrigger value="rewards">Награды</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">1. Общие положения</h4>
                <p className="text-sm text-gray-600">
                  • Все участники должны соблюдать правила сервера\n• Запрещено
                  использование читов и багов\n• Администраторы имеют право
                  изменять правила ивента
                </p>
                <h4 className="font-medium">2. Участие в ивентах</h4>
                <p className="text-sm text-gray-600">
                  • Регистрация обязательна\n• Опоздание более 10 минут =
                  исключение\n• Один игрок = один аккаунт
                </p>
              </div>
            </TabsContent>
            <TabsContent value="conduct" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Правила поведения</h4>
                <p className="text-sm text-gray-600">
                  • Уважительное отношение к участникам\n• Запрет на оскорбления
                  и токсичность\n• Следование указаниям администраторов
                </p>
              </div>
            </TabsContent>
            <TabsContent value="rewards" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium">Система наград</h4>
                <p className="text-sm text-gray-600">
                  • 1 место: 100,000$ + уникальный скин\n• 2 место: 50,000$ +
                  транспорт\n• 3 место: 25,000$ + оружие\n• Участие: 5,000$ +
                  опыт
                </p>
              </div>
            </TabsContent>
          </Tabs>
        );
      case "Фиксация деятельности":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Инструкция по фиксации деятельности
              </h3>
              <div className="space-y-3">
                <h4 className="font-medium">1. Обязательные записи</h4>
                <p className="text-sm text-gray-600">
                  • Все действия администратора должны быть зафиксированы в
                  журнале\n• Запись должна содержать время, действие и детали\n•
                  Обязательно указывать ID игроков при взаимодействии с ними
                </p>

                <h4 className="font-medium">2. Формат записи</h4>
                <p className="text-sm text-gray-600">
                  • Время в формате ЧЧ:ММ:СС\n• Краткое описание действия\n•
                  Подробные детали (участники, причины, результаты)\n•
                  Прикрепление скриншотов при необходимости
                </p>

                <h4 className="font-medium">3. Типы фиксируемых действий</h4>
                <p className="text-sm text-gray-600">
                  • Создание и завершение ивентов\n• Выдача наказаний игрокам\n•
                  Выдача наград и призов\n• Решение конфликтных ситуаций\n•
                  Технические проблемы и их решения
                </p>

                <h4 className="font-medium">4. Требования к качеству</h4>
                <p className="text-sm text-gray-600">
                  • Записи должны быть понятными для других администраторов\n•
                  Не допускается использование сокращений без объяснения\n• Все
                  действия должны соответствовать правилам сервера\n• Личные
                  комментарии выделяются отдельно
                </p>

                <h4 className="font-medium">5. Проверка и контроль</h4>
                <p className="text-sm text-gray-600">
                  • Записи проверяются главным администратором еженедельно\n•
                  Неполные или некорректные записи требуют исправления\n• За
                  систематическое нарушение ведения журнала - выговор\n• Лучшие
                  практики поощряются руководством
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Журнал действий</h3>
                <Button size="sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить запись
                </Button>
              </div>
              <div className="space-y-4">
                {activityLogs.map((log, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{log.time}</Badge>
                        <span className="font-medium">{log.admin}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Icon name="MoreHorizontal" size={14} />
                      </Button>
                    </div>
                    <p className="text-sm font-medium">{log.action}</p>
                    <p className="text-xs text-gray-600">{log.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Еженедельная отчетность":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-gray-600">Ивенты за неделю</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">324</div>
                  <div className="text-sm text-gray-600">Участников</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600">89%</div>
                  <div className="text-sm text-gray-600">Довольных игроков</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Отчёт за текущую неделю</h4>
              <div className="border rounded-lg p-4 space-y-2">
                <p className="text-sm">
                  <strong>Период:</strong> 01.07.2025 - 07.07.2025
                </p>
                <p className="text-sm">
                  <strong>Самый популярный ивент:</strong> Гонки на выживание
                  (45 участников)
                </p>
                <p className="text-sm">
                  <strong>Проблемы:</strong> Лаги на сервере во время массовых
                  ивентов
                </p>
                <p className="text-sm">
                  <strong>Рекомендации:</strong> Увеличить мощность сервера,
                  добавить новые виды наград
                </p>
              </div>
            </div>
          </div>
        );
      case "ГМП":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name="AlertTriangle"
                      size={20}
                      className="text-red-500"
                    />
                    <h4 className="font-medium text-red-700">
                      Активные наказания
                    </h4>
                  </div>
                  <div className="text-2xl font-bold text-red-600">7</div>
                  <div className="text-sm text-gray-600">Игроков в бане</div>
                </CardContent>
              </Card>
              <Card className="border-yellow-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Clock" size={20} className="text-yellow-500" />
                    <h4 className="font-medium text-yellow-700">
                      Временные меры
                    </h4>
                  </div>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                  <div className="text-sm text-gray-600">Предупреждений</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Типы наказаний</h4>
                <Button size="sm" variant="destructive">
                  <Icon name="UserX" size={16} className="mr-2" />
                  Выдать наказание
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-2">Предупреждение</h5>
                  <p className="text-sm text-gray-600">
                    За мелкие нарушения правил
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-2">Кик</h5>
                  <p className="text-sm text-gray-600">
                    Исключение из текущего ивента
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-2">Временный бан</h5>
                  <p className="text-sm text-gray-600">От 1 часа до 7 дней</p>
                </div>
                <div className="border rounded-lg p-3">
                  <h5 className="font-medium mb-2">Постоянный бан</h5>
                  <p className="text-sm text-gray-600">
                    За серьёзные нарушения
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "Статистика":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-blue-600">47</div>
                  <div className="text-sm text-gray-600">Всего ивентов</div>
                  <div className="text-xs text-green-600">+12% за месяц</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">1,234</div>
                  <div className="text-sm text-gray-600">Участников</div>
                  <div className="text-xs text-green-600">+23% за месяц</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-purple-600">92%</div>
                  <div className="text-sm text-gray-600">Завершаемость</div>
                  <div className="text-xs text-green-600">+5% за месяц</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-orange-600">4.7</div>
                  <div className="text-sm text-gray-600">Средняя оценка</div>
                  <div className="text-xs text-green-600">+0.3 за месяц</div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Популярные типы ивентов</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Гонки</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={75} className="w-32" />
                    <span className="text-sm">75%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Захват территории</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={60} className="w-32" />
                    <span className="text-sm">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Дуэли</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={45} className="w-32" />
                    <span className="text-sm">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "Оружие, скины и авто":
        return (
          <Tabs defaultValue="weapons" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weapons">Оружие</TabsTrigger>
              <TabsTrigger value="skins">Скины</TabsTrigger>
              <TabsTrigger value="vehicles">Транспорт</TabsTrigger>
            </TabsList>
            <TabsContent value="weapons" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Target" size={24} className="text-red-500" />
                      <div>
                        <h5 className="font-medium">AK-47</h5>
                        <p className="text-sm text-gray-600">
                          Награда за 1 место
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon
                        name="Crosshair"
                        size={24}
                        className="text-blue-500"
                      />
                      <div>
                        <h5 className="font-medium">Desert Eagle</h5>
                        <p className="text-sm text-gray-600">
                          Награда за 2 место
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="skins" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-3"></div>
                    <h5 className="font-medium">Элитный костюм</h5>
                    <p className="text-sm text-gray-600">Редкая награда</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg mb-3"></div>
                    <h5 className="font-medium">Военная форма</h5>
                    <p className="text-sm text-gray-600">За участие в ивенте</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="aspect-square bg-gradient-to-br from-green-400 to-yellow-400 rounded-lg mb-3"></div>
                    <h5 className="font-medium">Гоночный комбинезон</h5>
                    <p className="text-sm text-gray-600">Для гонщиков</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="vehicles" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Car" size={24} className="text-red-500" />
                      <div>
                        <h5 className="font-medium">Bugatti Chiron</h5>
                        <p className="text-sm text-gray-600">
                          Главный приз месяца
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Bike" size={24} className="text-blue-500" />
                      <div>
                        <h5 className="font-medium">Harley Davidson</h5>
                        <p className="text-sm text-gray-600">
                          Приз за активность
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        );
      case "Настройки":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Основные настройки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="server">Сервер</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сервер" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="server1">RMRP Server #1</SelectItem>
                        <SelectItem value="server2">RMRP Server #2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Часовой пояс</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="UTC+3" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc+3">UTC+3 (Москва)</SelectItem>
                        <SelectItem value="utc+0">UTC+0 (GMT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Уведомления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">
                      Уведомления о новых ивентах
                    </Label>
                    <Button variant="outline" size="sm">
                      Включено
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="reports">Напоминания об отчётах</Label>
                    <Button variant="outline" size="sm">
                      Включено
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="discord">Интеграция с Discord</Label>
                    <Button variant="outline" size="sm">
                      Настроить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      default:
        return <div>Раздел в разработке...</div>;
    }
  };

  const createEventForm = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="eventName">Название ивента</Label>
        <Input
          id="eventName"
          placeholder="Например: Гонки на выживание"
          value={eventForm.name}
          onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eventType">Тип ивента</Label>
        <Select
          value={eventForm.type}
          onValueChange={(value) => setEventForm({ ...eventForm, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Выберите тип" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="race">Гонки</SelectItem>
            <SelectItem value="pvp">PvP сражения</SelectItem>
            <SelectItem value="capture">Захват территории</SelectItem>
            <SelectItem value="survival">Выживание</SelectItem>
            <SelectItem value="roleplay">Ролевые ивенты</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="eventDescription">Описание</Label>
        <Textarea
          id="eventDescription"
          placeholder="Опишите правила и условия ивента..."
          value={eventForm.description}
          onChange={(e) =>
            setEventForm({ ...eventForm, description: e.target.value })
          }
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="participants">Максимум участников</Label>
          <Input
            id="participants"
            type="number"
            placeholder="20"
            value={eventForm.participants}
            onChange={(e) =>
              setEventForm({ ...eventForm, participants: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rewards">Награды</Label>
          <Input
            id="rewards"
            placeholder="100000$, оружие, авто"
            value={eventForm.rewards}
            onChange={(e) =>
              setEventForm({ ...eventForm, rewards: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline">Сохранить как шаблон</Button>
        <Button>Создать ивент</Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">RMRP Event Admin</h1>
                <p className="text-blue-100 text-lg">
                  Панель управления ивентовыми администраторами
                </p>
              </div>
              <div className="text-right">
                <Badge variant="secondary" className="mb-2">
                  <Icon name="Clock" size={16} className="mr-1" />
                  Онлайн
                </Badge>
                <p className="text-sm text-blue-200">
                  Сегодня: {new Date().toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Всего ивентов</p>
                  <p className="text-3xl font-bold">{eventStats.totalEvents}</p>
                </div>
                <Icon name="Calendar" size={40} className="text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Активных</p>
                  <p className="text-3xl font-bold">
                    {eventStats.activeEvents}
                  </p>
                </div>
                <Icon name="Play" size={40} className="text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Сегодня завершено</p>
                  <p className="text-3xl font-bold">
                    {eventStats.completedToday}
                  </p>
                </div>
                <Icon
                  name="CheckCircle"
                  size={40}
                  className="text-purple-200"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Отчёты к проверке</p>
                  <p className="text-3xl font-bold">
                    {eventStats.pendingReports}
                  </p>
                </div>
                <Icon
                  name="AlertCircle"
                  size={40}
                  className="text-orange-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {navigationCards.map((card, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${card.color}`}>
                        <Icon
                          name={card.icon}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Открыть
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    <div className={`p-2 rounded-lg ${card.color}`}>
                      <Icon name={card.icon} size={20} className="text-white" />
                    </div>
                    <span>{card.title}</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">{renderSectionContent(card.title)}</div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Activity" size={20} />
                <span>Последняя активность</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">
                      от {activity.admin} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Zap" size={20} />
                <span>Быстрые действия</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Создать новый ивент
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center space-x-2">
                      <Icon name="Plus" size={20} className="text-blue-600" />
                      <span>Создать новый ивент</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">{createEventForm()}</div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Сформировать отчёт
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Генерация отчёта</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label>Период отчёта</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите период" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="week">За неделю</SelectItem>
                          <SelectItem value="month">За месяц</SelectItem>
                          <SelectItem value="custom">Настраиваемый</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Тип отчёта</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="events">По ивентам</SelectItem>
                          <SelectItem value="admins">
                            По администраторам
                          </SelectItem>
                          <SelectItem value="full">Полный отчёт</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Предпросмотр</Button>
                      <Button>Сгенерировать</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Users" size={16} className="mr-2" />
                    Управление составом
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>Управление составом</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">{renderSectionContent("Состав")}</div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="BarChart3" size={16} className="mr-2" />
                    Просмотреть статистику
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Статистика</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    {renderSectionContent("Статистика")}
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 text-center text-gray-500">
          <p className="text-sm">
            RMRP Event Administration System • Версия 1.0 • Работает с{" "}
            {eventStats.totalEvents} ивентами
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
